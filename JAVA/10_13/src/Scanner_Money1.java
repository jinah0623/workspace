import java.util.Scanner;
public class Scanner_Money1{
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		System.out.println("��?");

		int money = sc.nextInt();

		int b = 0;	 //���

		int o = 0; 	//�����

		int c = 0; 	//õ��

		int m = 0; 	//����


		b = money / 100; //100�� ������ ��ȯ
		System.out.println("���"+b+"��");
		
		o = money / 500; //500�� ������ ��ȯ 
		System.out.println("�����"+o+"��");
		
		c = money / 1000; //1000�� ������ ��ȯ
		System.out.println("õ��"+c+"��");
		
		m = money / 10000; //10000�� ������ ��ȯ
		System.out.println("����"+m+"��");
	}
}



