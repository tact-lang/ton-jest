export const serializers = {
    test(src: unknown) {
        if (Buffer.isBuffer(src)) {
            return true;
        }
        return false;
    },

    print(src: unknown) {
        if (Buffer.isBuffer(src)) {
            return 'Buffer{' + src.toString('hex') + '}';
        }

        throw new Error('Unknown type');
    }
};