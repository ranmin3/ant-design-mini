import { Form } from '../../../src/Form/form';
Page({
    data: {
        onUpload(localFile) {
            return new Promise((resolve) => {
                console.log('上传的图片为：', localFile);
                setTimeout(() => {
                    resolve('https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ');
                }, 2000);
            });
        },
    },
    onLoad() {
        this.form = new Form({
            rules: {
                imageList: [
                    {
                        required: true,
                        message: '需要上传图片',
                    },
                    () => ({
                        validator(_, fileList = []) {
                            if (fileList.length !== 3) {
                                throw new Error('需要上传3张图片');
                            }
                            if (fileList.find((file) => file.status !== 'done')) {
                                throw new Error('图片需要上传完成');
                            }
                        },
                    }),
                ],
            },
        });
    },
    handleRef(ref) {
        this.form.addItem(ref);
    },
    reset() {
        this.form.reset();
    },
    submit() {
        this.form.submit().then(values => {
            console.log(values);
            my.alert({
                title: '提交',
                content: JSON.stringify(values),
            });
        });
    },
    onUpload(localFile) {
        return new Promise((resolve) => {
            console.log('上传的图片为：', localFile);
            setTimeout(() => {
                resolve('https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ');
            }, 2000);
        });
    },
});
