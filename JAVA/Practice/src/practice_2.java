import java.util.Scanner;

public class practice_2 {
	public static void main(String[] args) {	
		
		Scanner sc = new Scanner(System.in);
		System.out.println("�Է����ּ��� ");
		int i = sc.nextInt();
		System.out.println("�Է°��� : "+i);
		
		
		if (i >= 900) {
					if(i>=1000) {			//1000 �̻��̸� ���ָ���
						System.out.println("���� ����");
					}else {					//900�̻� 1000�̸��̸� ����
						System.out.println("����");
					}
		}
		else if (i>=800) {		
			 if (i>=850) {					// 850�̻��̸� ���� ����
					System.out.println("���� ����");
			 }else {						// 800~849��� ���� ����
				System.out.println("���ξ���");
			 }
		}
	}
}