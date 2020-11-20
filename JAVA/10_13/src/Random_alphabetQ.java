//알파벳을 입력받고 keycode를 구하여 system.in.read() 홀수 짝수로 나누어라

import java.util.Scanner;
	public class Random_alphabetQ {
	
		public static void main(String[] args) throws Exception{
			// TODO Auto-generated method stub

			System.out.println("알파벳을 입력하세요:");

			int keycode = 0;

			keycode = System.in.read();

			System.out.println("입력하신 값의 키코드는"+keycode); 

			if(keycode %2 ==0) {

				System.out.println("짝수");

			}

			else {

				System.out.println("홀수");

			}
			
			// System.out.println("알파벳을 입력하세요:");
	}
	}
