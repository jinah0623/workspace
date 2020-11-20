import java.util.Scanner;
import java.util.Random;

public class Practice {
	
	public static void main(String[] args) {	
		Scanner sc = new Scanner(System.in);
		System.out.println("정수를 입력하세요: ");
		int score = sc.nextInt();
		
		Random rd = new Random();
		int num = rd.nextInt(10);
		System.out.println("랜덤숫자는: "+num);
		
		
		double result = (score) / (num);
		System.out.println("나눈 값은: " +result);
		
		
		
		 if (result >= 100) {
			System.out.println("매우 큽니다.");
		}
		 else if (result >= 90) {
			 System.out.println("큽니다.");	
		 }
		 else if (result>=00) {
			 System.out.println("보통입니다.");
		 }	 
	}
}
