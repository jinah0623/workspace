

		// ??? ���ڸ� �Է� �ް� 0~���� ���ڱ����� ���� ���ϵ� While ���� ����Ұ�.

import java.util.Scanner;
public class Practice_self4 {
	
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		int i = sc.nextInt();
		System.out.println("�Է°���: "+i);
		int k=0;
		int sum=0;
		
		while (k<=i) {
			sum += k;		// sum�� ������ �ִ� �� , k�� ��� �����ϴ� ��(������)
			
			System.out.println("����: " +sum);
			k++;
			
			}
	}
}

