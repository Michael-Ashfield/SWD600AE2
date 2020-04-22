function useEvent(fStore) {
	const ref = fStore().collection("events");
	const createEvent = event => ref.add(event);
	const readEvents = () => ref.get();

	return {
		createEvent,
		readEvents
	};
}
export default useEvent;
