

		// ??? 숫자를 입력 받고 0~받은 숫자까지의 합을 구하되 While 문을 사용할것.

import java.util.Scanner;
public class Practice_self4 {
	
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		int i = sc.nextInt();
		System.out.println("입력값은: "+i);
		int k=0;
		int sum=0;
		
		while (k<=i) {
			sum += k;		// sum은 가지고 있는 값 , k는 계속 증가하는 수(더해질)
			
			System.out.println("합은: " +sum);
			k++;
			
			}
	}
}

