// ????? ���� 1���� Random�� �̿��� �ް� Ȧ���� ¦���� �����Ͻÿ�.

import java.util.Random;

public class Random_question {
	public static void main(String[] args) {
		
	Random rd = new Random();		//Random(100)�� 0~99
	int a = rd.nextInt(100)+1;
	System.out.println(a);
	
	if( a % 2==0) {
		System.out.println("¦��");
	}
	else {
		System.out.println("Ȧ��");
	}
	}
}
