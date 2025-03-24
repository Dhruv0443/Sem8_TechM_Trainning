import java.sql.*;
import java.util.Scanner;

public class JDBCTask {
    //Database credentials
    private static final String URL ="jdbc:mysql://localhost:3306/db";
    private static final String USER ="root";
    private static final String PASSWORD ="1234";
    public static void main(String[] args) {
        try{
            Class.forName("mysql-connector-j-9.2.0");
            Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
            if(conn !=null){
                System.out.println("connected");
            }
            else{
                System.out.println("not connected");
            }
            Scanner sc = new Scanner(System.in);
            int n =sc.nextInt();
            switch (n) {
                case 1: insertUser(conn, "rama","rama@example.com");
                    break;
                case 2: readUser(conn);
                    break;
                case 3: updateUser(conn, 1, "sitaram","sitaram@example.com");
                    break;
                case 4: deleteUser(conn, 1);
                    break;
                default: System.out.println("bad inputs");
            }
            conn.close();
        } catch(Exception e){
            e.printStackTrace();
        }
    }
    public static void insertUser(Connection conn, String name, String email) throws SQLException{
        String sql ="INSERT INTO users(name, email) VALUES (?,?)";
        PreparedStatement pstmt =conn.prepareStatement(sql);
        pstmt.setString(1, name);
        pstmt.setString(2, email);
        pstmt.executeUpdate();
        System.out.println("User inserted Successfully.");
    }
    public static void readUser(Connection conn) throws SQLException{
        String sql ="SELECT * FROM users";
        Statement stmt =conn.createStatement();
        ResultSet rs =stmt.executeQuery(sql);
        while (rs.next()) {
            System.out.println("ID: "+rs.getInt("id")+", Name: "+rs.getString("name")+", Email: "+rs.getString("email"));
        }
    }
    public static void updateUser(Connection conn,int id, String name, String email) throws SQLException{
        String sql ="UPDATE  users SET name=? , email=? WHERE id=?";
        PreparedStatement pstmt =conn.prepareStatement(sql);
        pstmt.setString(1, name);
        pstmt.setString(2, email);
        pstmt.setInt(3, id);
        pstmt.executeUpdate();
        System.out.println("User updated Successfully.");
    }
    public static void deleteUser(Connection conn,int id) throws SQLException{
        String sql ="DELETE FROM users WHERE id=?";
        PreparedStatement pstmt =conn.prepareStatement(sql);
        pstmt.setInt(1, id);
        pstmt.executeUpdate();
        System.out.println("User deleted Successfully.");
    }
}
