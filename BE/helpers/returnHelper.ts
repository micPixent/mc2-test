import { Response } from "express";
import * as Types from "../interface/base";

export function SendUnknownErrorResponse(res: Response, error: any) {
	res.status(400).send({
		error: "099",
		description: "unknown error ,please try again later",
	} as Types.ReturnData);

	console.error(error);
}

export function Send503ErrorResponse(res: Response, data: any) {
	res.status(503).send(data);
}

export function Send400ErrorResponse(
	res: Response,
	error: string,
	description: string
) {
	res.send({
		error: error,
		description: description,
	} as Types.ReturnData);
}

export function Send400ErrorResponseWithData(
	res: Response,
	data: any,
	id?: any
) {
	if (id !== null && id !== undefined) {
		data = { ...data, id };
	}

	res.send(data);
}

export function Send200ErrorResponse(
	res: Response,
	error: string,
	description: string
) {
	res.send({
		error: error,
		description: description,
	} as Types.ReturnData);
}

export function SendSuccessResponse(
	res: Response,
	data: any,
	error: string = "",
	description: string = "ok"
) {
	res.send({
		error: error,
		description: description,
		data: data,
	} as Types.ReturnData);
}

export function SendSuccessfulResults(res: Response, data: Types.ResponseData) {
	res.send(data);
}

export function Send200SuccessfulResults(res: Response, data: any) {
	res.status(200).send(data);
}
