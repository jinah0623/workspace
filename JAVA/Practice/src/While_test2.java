
import java.util.Scanner;
public class While_test2 {
	
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		boolean run = true;
		int speed = 0;
		int keyCode = 0;
		
		while(run) {
			System.out.println("keyCode: " +keyCode);
			if(keyCode!=12 && keyCode!=10) {
				System.out.println("1. ����| 2. ����| 3. ����");
				System.out.println("����:");
			}
			
			keyCode = System.in.read();
			
			if(keyCode ==49) {
				speed++;
				System.out.println("�ӵ� =" +speed);
			}else if (keyCode ==50) {
				speed --;
				System.out.println("�ӵ� =" +speed);
			}else if (keyCode==51) {
				run = false;
			}
		}
	
	}
}
