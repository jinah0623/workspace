import java.util.Scanner;
import java.util.Random;

public class Practice {
	
	public static void main(String[] args) {	
		Scanner sc = new Scanner(System.in);
		System.out.println("������ �Է��ϼ���: ");
		int score = sc.nextInt();
		
		Random rd = new Random();
		int num = rd.nextInt(10);
		System.out.println("�������ڴ�: "+num);
		
		
		double result = (score) / (num);
		System.out.println("���� ����: " +result);
		
		
		
		 if (result >= 100) {
			System.out.println("�ſ� Ů�ϴ�.");
		}
		 else if (result >= 90) {
			 System.out.println("Ů�ϴ�.");	
		 }
		 else if (result>=00) {
			 System.out.println("�����Դϴ�.");
		 }	 
	}
}
