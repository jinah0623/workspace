// ????? 정수 1개를 Random을 이용해 받고 홀수와 짝수를 구분하시오.

import java.util.Random;

public class Random_question {
	public static void main(String[] args) {
		
	Random rd = new Random();		//Random(100)은 0~99
	int a = rd.nextInt(100)+1;
	System.out.println(a);
	
	if( a % 2==0) {
		System.out.println("짝수");
	}
	else {
		System.out.println("홀수");
	}
	}
}
