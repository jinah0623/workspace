import java.util.Scanner;

public class Channel {

	public int chnupdown(int channel) {
		
		System.out.println(channel+"ä�η� �̵��Ǿ����ϴ�.");
		boolean stop = false;
 		int result = 0;
		
		while (!stop) {
			Scanner sc = new Scanner(System.in);
			System.out.println("������ �Է�(+,-)");	
			String a = sc.next();
			
			if(a.equals("+")){
				channel++;
				System.out.println(channel +"ä�� �Դϴ�");
				}
				if(a.equals("-")){	
					channel--;
			System.out.println(channel +"ä���Դϴ�.");
			System.out.println("���� ������"+result+"�Դϴ�");
			continue;
			
				}
	
	}	return channel;
	}}
