export interface Client {
	Id: string;
	IsActive: boolean;
	Gender: string;
	FirstName: string;
	LastName: string;
	DateOfBirth: string;
	Email: string;
	Phones: string[];
	Address: string;
	SubscriptionId: string;
	ExpirationDate: string;
	Balance: number;
}

export interface Login {
	userName: string;
	password: string;
}
