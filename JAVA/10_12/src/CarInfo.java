		
	public class CarInfo {

		public static void main(String[] args) {  	//객체 생성

		Car myCar = new Car();		
		System.out.println("제작회사: " + myCar.company[4]);			//필드 값 읽기

		System.out.println("모델명: " + myCar.model[4]);

		System.out.println("색깔: " + myCar.color[4]);

		System.out.println("최고속도: " + myCar.ps[4]);

		System.out.println("현재속도: " + myCar.speed);		
		
		
		myCar.speed = 60;					//필드 값 변경

		System.out.println("수정된 속도: " + myCar.speed);

		}
	}
