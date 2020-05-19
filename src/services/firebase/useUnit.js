function useUnit(fStore) {
	const ref = fStore().collection("units");
	const readUnits = () => ref.get();
	const readUnitAssignment = id =>
		ref
			.doc(id)
			.collection("assignment")
			.get();
	const checkUnitAssignment = (assignmentId, unitId, checked) =>
		ref
			.doc(unitId)
			.collection("assignment")
			.doc(assignmentId)
			.update("complete", checked);
	const readUnitAssignmentTask = (assignmentId, unitId) =>
		ref
			.doc(unitId)
			.collection("assignment")
			.doc(assignmentId)
			.collection("tasks")
			.get();
	const checkUnitAssignmentTask = (taskId, assignmentId, unitId, checked) =>
		ref
			.doc(unitId)
			.collection("assignment")
			.doc(assignmentId)
			.collection("tasks")
			.doc(taskId)
			.update("complete", checked);

	return {
		readUnits,
		readUnitAssignment,
		readUnitAssignmentTask,
		checkUnitAssignment,
		checkUnitAssignmentTask
	};
}
export default useUnit;
