		
	public class CarInfo {

		public static void main(String[] args) {  	//��ü ����

		Car myCar = new Car();		
		System.out.println("����ȸ��: " + myCar.company[4]);			//�ʵ� �� �б�

		System.out.println("�𵨸�: " + myCar.model[4]);

		System.out.println("����: " + myCar.color[4]);

		System.out.println("�ְ�ӵ�: " + myCar.ps[4]);

		System.out.println("����ӵ�: " + myCar.speed);		
		
		
		myCar.speed = 60;					//�ʵ� �� ����

		System.out.println("������ �ӵ�: " + myCar.speed);

		}
	}
