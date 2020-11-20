import java.util.Scanner;

public class Volume{
	public int volupdown(int volume) {
		
		boolean stop = false;
 		int result = 0;
		
		while (!stop) {
				Scanner sc = new Scanner(System.in);
				System.out.println("연산자 입력(+,-)");
				String a = sc.next();
			
			if(a.equals("+")){
				volume++;
				System.out.println("볼륨이 올라갔습니다");
				System.out.println("볼륨은" +result);
				}
				if(a.equals("-")){	
					volume--;
			System.out.println("볼륨이 내려갔습니다.");
			System.out.println("현재 볼륨은"+result+"입니다");
			continue;
			
				}
			
		}return volume;
	
	} 	

}