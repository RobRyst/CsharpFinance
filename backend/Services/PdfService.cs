using backend.Dtos;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

namespace backend.Services;

public class PdfService
{
    public byte[] GenerateInvoicePDF()
    {
        QuestPDF.Settings.License = LicenseType.Community;
        var document = Document.Create(container =>
        {
            container.Page(page =>
            {
                page.Size(PageSizes.A4);
                page.Margin(2, Unit.Centimetre);
                page.PageColor(Colors.White);
                page.DefaultTextStyle(x => x.FontSize(20));

                page.Header().Text("Invoice Summary")
                             .SemiBold()
                             .FontSize(20)
                             .FontColor(Colors.Blue.Medium);

                page.Content()
                    .PaddingVertical(1, Unit.Centimetre)
                    .Column(x =>
                    {
                        x.Spacing(20);
                        x.Item().Text(Placeholders.LoremIpsum());
                        x.Item().Image(Placeholders.Image(200, 100));
                    });

                page.Footer()
                    .AlignCenter()
                    .Text(x =>
                    {
                        x.Span("Page ");
                        x.CurrentPageNumber();
                    });
            });
        });

        return document.GeneratePdf();
    }

    public byte[] GenerateInvoiceSummaryPDF(List<InvoiceDto> invoices)
    {
        QuestPDF.Settings.License = LicenseType.Community;
        var document = Document.Create(container =>
        {
            container.Page(page =>
            {
                page.Margin(20);
                page.Size(PageSizes.A4);
                page.PageColor(Colors.White);

                page.Header().Text("Invoice Summary")
                             .SemiBold()
                             .FontSize(20)
                             .FontColor(Colors.Blue.Medium);

                page.Content().Element(container =>
{
    container.Column(column =>
    {
        column.Spacing(10);

        column.Item().Element(content =>
        {
            content.Table(table =>
            {
                table.ColumnsDefinition(columns =>
                {
                    columns.ConstantColumn(30);
                    columns.RelativeColumn();
                    columns.RelativeColumn();
                    columns.RelativeColumn();
                    columns.RelativeColumn();
                    columns.RelativeColumn();
                    columns.RelativeColumn();
                });

                table.Header(header =>
                {
                    header.Cell().Element(CellStyleHeader).Text("#");
                    header.Cell().Element(CellStyleHeader).Text("First Name");
                    header.Cell().Element(CellStyleHeader).Text("Last Name");
                    header.Cell().Element(CellStyleHeader).Text("Status");
                    header.Cell().Element(CellStyleHeader).Text("Sub_total");
                    header.Cell().Element(CellStyleHeader).Text("Discount");
                    header.Cell().Element(CellStyleHeader).Text("Total");

                    static IContainer CellStyleHeader(IContainer container) =>
                        container.Padding(5).Background(Colors.Grey.Lighten2).DefaultTextStyle(x => x.SemiBold());
                });

                int index = 1;
                foreach (var invoice in invoices)
                {
                    table.Cell().Element(CellStyle).Text(index++.ToString());
                    table.Cell().Element(CellStyle).Text(invoice.FirstName);
                    table.Cell().Element(CellStyle).Text(invoice.LastName);
                    table.Cell().Element(CellStyle).Text(invoice.Status);
                    table.Cell().Element(CellStyle).Text($"{invoice.Sub_total:C}");
                    table.Cell().Element(CellStyle).Text($"{invoice.Discount:C}");
                    table.Cell().Element(CellStyle).Text($"{invoice.Total:C}");
                }

                static IContainer CellStyle(IContainer container) =>
                    container.PaddingVertical(2).PaddingHorizontal(5);
            });
        });
    });
});
                page.Footer().AlignCenter().Text(x =>
                {
                    x.Span("Generated on ");
                    x.Span(DateTime.Now.ToString("dd MMM yyyy")).SemiBold();
                });
            });
        });

        return document.GeneratePdf();
    }
}