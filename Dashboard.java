package forms;
import javax.awt.Color;
import javax.swing.BorderFactory;
import utility.BDUtility;

public class Dashboard extends javax.swing.JFrame{
/**
 * Creates new form Dashboard
 */
    public Dashboard(){
        initComponents();
        BDUtility.setImage(this,"images/abc1.jpg",1366, 786);
        this.getRootPane().setBorder(BorderFactory.createMatteBorder(4, 4,4, 4, Color.BLACK));
    }
}