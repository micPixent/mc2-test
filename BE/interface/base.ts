export type ReturnData = {
	error: string;
	description: string;
};

export interface ResponseData {
	error?: string | object | null;
	description?: string;
	[key: string]: any;
}
