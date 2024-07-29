export function BaseFunction() {
	return class Base {
		protected static collection: any;

		static save(payload: any): Promise<any> {
			return this.collection.create(payload);
		}

		static async findOne(filter: any, options: any = {}): Promise<any> {
			let query = this.collection.findOne(filter);

			if (
				options.sort ||
				(typeof options.sort === "object" && Object.keys(options.sort).length)
			) {
				query.sort(options.sort);
			}

			if (
				options.project ||
				(Array.isArray(options.project) && options.project.length) ||
				(typeof options.project === "object" &&
					Object.keys(options.project).length)
			) {
				query.select(options.project);
			}

			if (options.isSecondary) {
				query.read("secondaryPreferred");
			}

			if (!options.isCursor) {
				query.lean({ getters: true });
			}

			if (options.populate?.length) {
				query.populate(options.populate);
			}

			const result = await query.exec();
			return result;
		}

		static async updateOne(
			filter: any,
			updatePayload: any,
			options?: any
		): Promise<boolean> {
			return this.collection
				.updateOne(filter, updatePayload, options)
				.then((updatedResult: any) => {
					return !(
						!updatedResult ||
						!updatedResult.modifiedCount ||
						!updatedResult.matchedCount
					);
				});
		}
	};
}
