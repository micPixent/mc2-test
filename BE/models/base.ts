export function BaseFunction() {
	return class Base {
		protected static collection: any;

		static save(payload: any): Promise<any> {
			return this.collection.create(payload);
		}
	};
}
