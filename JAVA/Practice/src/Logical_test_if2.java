import java.util.Scanner;

public class Logical_test_if2 {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("�Է��ϼ���.");
		int score = sc.nextInt();
		
		if(score >= 90) {
			System.out.println("������ 90������ �����ϴ�.");
			System.out.println("AŬ���� �Դϴ�.");
		}else {
			System.out.println("������ 90������ �����ϴ�.");
			System.out.println("BŬ���� �Դϴ�.");
		}
		
	}
}
