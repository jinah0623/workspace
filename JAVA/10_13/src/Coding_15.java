import java.util.Random;
import java.util.Scanner;

public class Coding_15 {
	public static void main(String[] args) {
		
		System.out.println("�Է��� ������?");
		Scanner sc = new Scanner(System.in);
		int x = sc.nextInt();
		System.out.println("������:" +x);
		
		Random rd = new Random();		// 0~10���� ����
		int y = rd.nextInt(10)+1;
		System.out.println(y);
		int sum=0;
		
		for (int b=0; b<=x; b++) {		//�Է� ���� ���ڱ��� ���ϱ�
				sum += b;
		}
		System.out.println("����:" +sum);
		System.out.println("���� ���ڴ�:" + y);
		System.out.println(sum + " * "+ y +" = "+sum*y);
		}

	}
