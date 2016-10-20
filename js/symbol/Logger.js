var _instance = null;

export default class Logger{
    constructor()
    {
        this._logs = {};
    }

    add(timestamp, value)
    {
        this._logs[timestamp] = value;
    }

    getAll()
    {
        return this._logs;
    }

    clearAll()
    {
        this._logs = {};
    }

    static getInstance()
    {
        if(!_instance)
        {
            _instance = new Logger();
        }

        return _instance;
    }
}
