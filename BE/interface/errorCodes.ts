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
}
