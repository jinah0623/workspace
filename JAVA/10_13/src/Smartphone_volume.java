// ??? 스마트폰 볼륨 키우고 줄이기

import java.util.Scanner;

public class Smartphone_volume {
	public static void main(String[] args) {
		
		
		boolean stop = false;
		int result = 0;
		
		while (!stop) {
			Scanner sc = new Scanner(System.in);
			System.out.println("연산자 입력(+,-)");
			String a = sc.next();
			
			if (a.equals("+")) {
				result++;				
				System.out.println("volume은:" +result);
			}
				
			if(a.equals("-")){
				result--;				
					System.out.println("volume은:"+result);
					continue ;
			
			}
		}
	}
}
