import java.util.Scanner;

public class For_test2 {
	

	public static void main(String[] args) {	
		Scanner sc = new Scanner(System.in);
		System.out.println("���ڸ� �Է��ϼ���:");
		
		int num = sc.nextInt();		
		int j;
		int i;
		
		if (num <= 10) {			//���ڴ� 10����
			for(i=num; i<=10; i++) {	//i�� ���ڶ� ����, i�� 10�� �ɶ����� +1
				for(j=1; j<=10; j++) {	
					System.out.println("*** " + num + "��***");
					
				for(j=1; j<=10; j++) {
					System.out.println(i + "X" + j + "=" +(i*j));
					}
				}
			}
		}else {
				 System.out.println("���ؿ�");
		}
	}
}

	
			
			
			
	
			


