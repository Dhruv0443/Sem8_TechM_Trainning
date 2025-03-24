import java.util.Scanner;
abstract class Plan {
    protected double rate;
    abstract void getRate();

    public void calculateBill(int units){
        System.out.println(units * rate);
    }
}
class DomesticPlan extends Plan {
    public void getRate(){
        rate = 3.50;
    }
}
class CommercialPlan extends Plan {
    public void getRate(){
        rate = 7.50;
    }
}
class InstitutionalPlan extends Plan {
    public void getRate(){
        rate = 5.50;
    }
}
class GetPlanFactory {
    public Plan getPlan(String planType){
        if(planType == null){
            return null;
        }
        if(planType.equalsIgnoreCase("DOMESTICPLAN")){
            return new DomesticPlan();
        } else if(planType.equalsIgnoreCase("COMMERCIALPLAN")){
            return new CommercialPlan();
        } else if(planType.equalsIgnoreCase("INSTITUTIONALPLAN")){
            return new InstitutionalPlan();
        }
        return null;
    }
}
public class GenerateBill {
    public static void main(String[] args) {
        GetPlanFactory planFactory = new GetPlanFactory();
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the name of the plan for which the bill will be generated: ");
        String planName = sc.nextLine();
        System.out.println("Enter the number of units for which the bill will be calculated: ");
        int units = sc.nextInt();

        Plan p = planFactory.getPlan(planName);
        if (p != null) {
            p.getRate();
            System.out.println("Bill amount for " + planName + " of " + units + " units is: ");
            p.calculateBill(units);
        } else {
            System.out.println("Invalid plan type!");
        }
        sc.close();
    }
}
