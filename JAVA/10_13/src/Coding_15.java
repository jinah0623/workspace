import java.util.Random;
import java.util.Scanner;

public class Coding_15 {
	public static void main(String[] args) {
		
		System.out.println("입력할 정수는?");
		Scanner sc = new Scanner(System.in);
		int x = sc.nextInt();
		System.out.println("정수는:" +x);
		
		Random rd = new Random();		// 0~10까지 랜덤
		int y = rd.nextInt(10)+1;
		System.out.println(y);
		int sum=0;
		
		for (int b=0; b<=x; b++) {		//입력 받은 숫자까지 더하기
				sum += b;
		}
		System.out.println("합은:" +sum);
		System.out.println("랜덤 숫자는:" + y);
		System.out.println(sum + " * "+ y +" = "+sum*y);
		}

	}

