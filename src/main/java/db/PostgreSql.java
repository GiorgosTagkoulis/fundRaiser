package db;

import java.sql.*;

public class PostgreSql {

    static String url = "jdbc:postgresql://localhost:5432/fundRaiser-db";
    static String user = "postgres";
    static String password = "secret";

    private static Connection getConnection() throws SQLException {
        return DriverManager.getConnection( url, user, password);
    }

    public Sum getSum() {
        int sum = 0;
        try (Connection connection = getConnection()){

            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery("SELECT SUM(donation) FROM public.pledges");
            while (rs.next()) {
                sum = ((Number) rs.getObject(1)).intValue();
            }
        } catch (SQLException e) {
            System.out.println("Connection failure.");
            e.printStackTrace();
        }
        return new Sum("sum", sum);
    }

    public Sum saveDonation(int donation) {
        String query = "INSERT INTO pledges (donation) VALUES (?)";
        try (Connection con = DriverManager.getConnection(url, user, password);
             PreparedStatement pst = con.prepareStatement(query)) {

            pst.setInt(1, donation);
            pst.executeUpdate();

        } catch (SQLException e) {
        System.out.println("Connection failure.");
        e.printStackTrace();
        }
        return getSum();
    }
}
