import java.util.Scanner;

public class Coding_16 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		Coding_16 TV = new Coding_16();
		boolean stop = false;

		System.out.println("리모콘입니다.");
		System.out.println("On, Off 입력");
		String of = sc.next();
		int volume = 0;
		int channel = 0;

		while (!stop) {
			if (of.equals("On") || of.equals("on")) {
				System.out.println("----------------");
				System.out.println("1.채널 | 2.볼륨");
				int s = sc.nextInt();
				if (s == 1) {
					Channel ch = new Channel();
					channel = ch.chnupdown(channel);

				} else if (s == 2) {
					Volume vl = new Volume();
					volume = vl.volupdown(volume);
				}
			} else if (of.equals("Off") || of.equals("off")) {
				System.out.println("TV가 꺼졌습니다.");
				break;
			}
			

		}

		/*
		 * 
		 * tv.turnonoff();
		 * 
		 * Volume vl = new Volume(); String b = vl.volupdown();
		 * 
		 * vl.volupdown();
		 * 
		 * Channel ch = new Channel(); String a = ch.chnupdown(); ch.chnupdown();
		 * 
		 * }
		 * 
		 */
	}

}
