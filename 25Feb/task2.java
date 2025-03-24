import java.util.Scanner;

public class task2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float a = sc.nextFloat();
        float b= sc.nextFloat();
        char operator = sc.next().charAt(0);
        sc.close();
        float ans =0;
        if(operator == '+'){
            ans = a+b;
            System.out.printf("%.2f",ans);
        }
        else if(operator == '-'){
            ans = a-b;
            System.out.printf("%.2f",ans);
        }
        else if(operator == '*'){
            ans = a*b;
            System.out.printf("%.2f",ans);
        }
        else if(operator == '/'){
            ans = a/b;
            System.out.printf("%.2f",ans);
        }
        else if(b == 0 && operator=='/'){
            System.out.println("Division by zero is not allowed");
        }
        else{
            System.out.println("Invalid operator");
        }
    
    }
}
