import { ReturnData } from "./base";

export class ErrorCode extends Error {
	code: any;

	constructor(data: ReturnData) {
		super(data.description);
		this.code = data.error;
	}
}

export class ErrorCodes {
	static readonly SystemError = {
		error: "001",
		description: "System error.",
	} as ReturnData;

	static readonly InvalidUser = {
		error: "002",
		description: "Invalid user.",
	} as ReturnData;

	static readonly EmailExist = {
		error: "003",
		description: "Email used.",
	} as ReturnData;
	static readonly InvalidPassword = {
		error: "004",
		description: "Invalid password.",
	} as ReturnData;
}
