import java.util.Scanner;
class Product{
    private float qty,price;
    public float getQty(){
        return qty;
    }
    public void setQty(float qty){
        this.qty=qty;
    }
    public float getPrice(){
        return price;
    }
    public void setPrice(float price){
        this.price=price;
    }
}
public class ProductDetails {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Product p;
        float grossAmt =0, netAmt=0;
        float cashDiscAmt=0;
        char cashDisc;
        int n;
        n = sc.nextInt();
        for(int i =0;i<n;i++){
            p=new Product();
            p.setPrice(sc.nextFloat());
            p.setQty(sc.nextFloat());
            cashDisc=sc.next().charAt(0);

            if(p.getQty()>=10){
                grossAmt=p.getPrice()*p.getQty();
                grossAmt=(float)(grossAmt-(grossAmt*0.20));
            }
            if(cashDisc =='Y'||cashDisc=='y'){
                cashDiscAmt=(float)(grossAmt*0.05);
                grossAmt = grossAmt -cashDiscAmt;
                netAmt+=grossAmt;
            }
            else{
                netAmt+=grossAmt;
            }
            System.out.printf("%.2f",netAmt);
        }
        sc.close();
    }
}
