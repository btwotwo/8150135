////////////////////////////////////////////////////////////////////////////////////////
// ListenActivity
////////////////////////////////////////////////////////////////////////////////////////

ListenActivity = function()
{
	var ob = new ParallelActivity();
	ob.Type = 'ListenActivity';
	ob.__parallelActivityInitType = 'EventDrivenActivity';

	return ob;
}
