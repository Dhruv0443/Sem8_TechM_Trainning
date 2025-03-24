import java.util.Scanner;
class Call {
    private int id;
    private long num;
    private double time;
    public void parseData(String data) {
        String[] parts = data.split(":");
        if (parts.length == 3) {
            this.id = Integer.parseInt(parts[0]);
            this.num = Long.parseLong(parts[1]);
            this.time = Double.parseDouble(parts[2]);
        }
    }
    public int getId() {
        return id;
    }
    public long getNumber() {
        return num;
    }
    public double getTime() {
        return time;
    }
}
public class task1 {
      public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String inputData = sc.nextLine();
        sc.close();
        Call call = new Call();
        call.parseData(inputData);
        System.out.println("Call id:" + call.getId());
        System.out.println("Called number:" + call.getNumber());
        System.out.println("Duration:" + call.getTime());
      }

}
