import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
    borderBottom: 1,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  ticketInfo: {
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    color: "#666666",
  },
  value: {
    fontSize: 12,
    fontWeight: "bold",
  },
  total: {
    marginTop: 10,
    paddingTop: 10,
    borderTop: 1,
  },
});
interface BookingDetails {
  bookingId: string;
  event: string;
  date: string;
  time: string;
  quantity: string;
  totalPaid: string;
}

const TicketPDF = ({ bookingDetails }: { bookingDetails: BookingDetails }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Update the values to use bookingDetails */}
      <View style={styles.row}>
        <Text style={styles.label}>Booking ID:</Text>
        <Text style={styles.value}>{bookingDetails.bookingId}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Event:</Text>
        <Text style={styles.value}>{bookingDetails.event}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{bookingDetails.date}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Time:</Text>
        <Text style={styles.value}>{bookingDetails.time}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Quantity:</Text>
        <Text style={styles.value}>{bookingDetails.quantity}</Text>
      </View>
      <View style={[styles.row, styles.total]}>
        <Text style={styles.label}>Total Paid:</Text>
        <Text style={styles.value}>{bookingDetails.totalPaid}</Text>
      </View>
    </Page>
  </Document>
);

export default TicketPDF;
