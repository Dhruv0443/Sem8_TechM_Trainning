import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Scanner;
import java.util.Date;
public class TaskData {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    SimpleDateFormat sdf =new SimpleDateFormat("dd-MM-yyyy");
    int n=sc.nextInt();
    Date[] dt =new Date[n];
    for(int i=0;i<n;i++){
        try{
            dt[i]=sdf.parse(sc.next());
        }
        catch(ParseException e){
            e.printStackTrace();
        }
    }
    Arrays.sort(dt);
    for(Date temp:dt){
        System.out.println(sdf.format(temp));
    }
    sc.close();
  }  

}
