import java.util.Scanner;

public class Channel {

	public int chnupdown(int channel) {
		
		System.out.println(channel+"채널로 이동되었습니다.");
		boolean stop = false;
 		int result = 0;
		
		while (!stop) {
			Scanner sc = new Scanner(System.in);
			System.out.println("연산자 입력(+,-)");	
			String a = sc.next();
			
			if(a.equals("+")){
				channel++;
				System.out.println(channel +"채널 입니다");
				}
				if(a.equals("-")){	
					channel--;
			System.out.println(channel +"채널입니다.");
			System.out.println("현재 볼륨은"+result+"입니다");
			continue;
			
				}
	
	}	return channel;
	}}
