// ??? ����Ʈ�� ���� Ű��� ���̱�

import java.util.Scanner;

public class Smartphone_volume {
	public static void main(String[] args) {
		
		
		boolean stop = false;
		int result = 0;
		
		while (!stop) {
			Scanner sc = new Scanner(System.in);
			System.out.println("������ �Է�(+,-)");
			String a = sc.next();
			
			if (a.equals("+")) {
				result++;				
				System.out.println("volume��:" +result);
			}
				
			if(a.equals("-")){
				result--;				
					System.out.println("volume��:"+result);
					continue ;
			
			}
		}
	}
}
