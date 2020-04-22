function useEmail(fStore) {
	const ref = fStore().collection("emails");
    const readEmails = () => ref.get();
    const createEmail = email => ref.add(email);

	return {
		readEmails,
		createEmail,
	};
}
export default useEmail;
