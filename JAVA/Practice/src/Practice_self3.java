
// ???Scanner�� ���ڸ� �Է¹ް� ���ڰ� 20���̻��̸� substring�� �̿��� �ѱ��ھ� ���


import java.util.Scanner;

public class Practice_self3 {
	
	public static void main(String[] args)  {
		Scanner sc = new Scanner(System.in);
		System.out.println("���ڸ� �Է��ϼ���: ");		
		String i = sc.next();
		System.out.println("���ڴ�: "+i); 

		int a = i.length();
		System.out.println("���̴�: "+a);
		int c = a/2;
		
		
		if (a<=20) {
			
			for(int b=0; b<=c; b++) {			// ���� ���̰� 0���� �����ϱ� ������ '=' ����,
			String j = i.substring(b,b+1);
			System.out.println(j);
					
			/* for(int m=c; m<a; m++) {
			String k = i.substring(c,a+1);
			System.out.println("��������: " +k);
				}*/
			}	
		}else {
			System.out.println("�ȵ�");
			}
		}
	}
