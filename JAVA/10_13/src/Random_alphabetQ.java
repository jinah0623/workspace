//���ĺ��� �Է¹ް� keycode�� ���Ͽ� system.in.read() Ȧ�� ¦���� �������

import java.util.Scanner;
	public class Random_alphabetQ {
	
		public static void main(String[] args) throws Exception{
			// TODO Auto-generated method stub

			System.out.println("���ĺ��� �Է��ϼ���:");

			int keycode = 0;

			keycode = System.in.read();

			System.out.println("�Է��Ͻ� ���� Ű�ڵ��"+keycode); 

			if(keycode %2 ==0) {

				System.out.println("¦��");

			}

			else {

				System.out.println("Ȧ��");

			}
			
			// System.out.println("���ĺ��� �Է��ϼ���:");
	}
	}
