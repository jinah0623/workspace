import java.util.Scanner;

public class Mix_practice {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("1st:");
		int num1 = sc.nextInt();
		System.out.println("2nd: ");
		int num2 = sc.nextInt();
		
		int i;
		boolean b = (num1< num2);	//ù��° ���ڰ� �ι�° ���ں��� ������
		
		if (b == true){		//������ ������
			for(i=num1; i<=num2; i++) {		
				if(i%2==0) {		//���ڰ� ¦���� ��
					System.out.println("¦��: "+i);
				}else{System.out.println("Ȧ��: "+ i);
		
				}
			}
			
		}else {			// False �̶��
			System.out.println("���ڰ� ��Ȯ���� �ʽ��ϴ�.");
		}
				
				}
	}