import java.util.Scanner;

public class Volume{
	public int volupdown(int volume) {
		
		boolean stop = false;
 		int result = 0;
		
		while (!stop) {
				Scanner sc = new Scanner(System.in);
				System.out.println("������ �Է�(+,-)");
				String a = sc.next();
			
			if(a.equals("+")){
				volume++;
				System.out.println("������ �ö󰬽��ϴ�");
				System.out.println("������" +result);
				}
				if(a.equals("-")){	
					volume--;
			System.out.println("������ ���������ϴ�.");
			System.out.println("���� ������"+result+"�Դϴ�");
			continue;
			
				}
			
		}return volume;
	
	} 	

}