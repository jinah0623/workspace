
//???Scanner�� ���ڸ� ���� �� 10���� ���ϸ� �Է��� ���ڸ� ��� �̻��̸� ����Ҽ������ϴ�.

import java.util.Scanner;

public class Practice_self2 {
	public static void main(String[] args) throws Exception{
	
Scanner sc = new Scanner(System.in);
		
		System.out.println("���ڸ� �Է��ϼ���.");
		String a = sc.next();
		int i = a.length();
		System.out.println("����� �Է��� ���� ���� ���" + i+ "�� �Դϴ�.");
		
		if (i <=10) {
			System.out.println("�Է��� ����: "+a);
		
		}else {
				System.out.println("����� �� �����ϴ�.");
			}
		}
	
	}

