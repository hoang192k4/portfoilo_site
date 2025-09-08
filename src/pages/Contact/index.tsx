import classNames from 'classnames/bind';
import { FaPaperPlane } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Contact.module.scss';
import Button from '@components/ui/Button';
import ErrorMessage from '@/components/ui/ErrorMessage';

const cx = classNames.bind(styles);

interface Contact {
    name: string;
    email: string;
    content: string;
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Contact>();

    //fake call api tương tác client
    const handleContact = (data: Contact) => {
        toast.success(
            <div>
                Cảm ơn <strong style={{ color: '#4CAF50' }}>{data.name}</strong> đã tương tác!{' '}
                <br />
                Chúng tôi đã nhận được phản hồi của bạn.
            </div>,
        );
        reset();
    };

    return (
        <>
            <section className={cx('wapper')} id="contact">
                <h1 className="hashtag">Liên Hệ</h1>

                <div className={cx('title')}>
                    <p>Tôi luôn tìm kiếm những cơ hội và sự hợp tác mới.</p>
                    <p>Nếu bạn có bất kỳ câu hỏi nào hoặc muốn hợp tác, vui lòng liên hệ.</p>
                </div>

                <form className={cx('form')} onSubmit={handleSubmit(handleContact)}>
                    <div className={cx('form-row')}>
                        <div className={cx('form-group', errors.name ? 'form-group-error' : '')}>
                            <label htmlFor="name" className={cx('form-label')}>
                                Họ và Tên<span>*</span>
                            </label>
                            <input
                                type="text"
                                {...register('name', { required: 'Vui lòng nhập họ và tên' })}
                                placeholder="Nguyễn Văn A"
                            />
                            {errors.name && <ErrorMessage subTitle={errors.name.message} />}
                        </div>

                        <div className={cx('form-group', errors.email ? 'form-group-error' : '')}>
                            <label htmlFor="name" className={cx('form-label')}>
                                Email<span>*</span>
                            </label>
                            <input
                                type="text"
                                {...register('email', {
                                    required: 'Vui lòng nhập email',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Email không hợp lệ',
                                    },
                                })}
                                placeholder="example@gmail.com"
                            />
                            {errors.email && <ErrorMessage subTitle={errors.email.message} />}
                        </div>
                    </div>

                    <div className={cx('form-text', errors.content ? 'form-group-error' : '')}>
                        <label htmlFor="content" className={cx('form-label')}>
                            Nội dung<span>*</span>
                        </label>
                        <textarea
                            {...register('content', { required: 'Vui lòng nhập nội dung' })}
                            placeholder="Bạn muốn trao đổi điều gì với chúng tôi?"
                        ></textarea>
                        {errors.content && <ErrorMessage subTitle={errors.content.message} />}
                    </div>

                    <Button primary className={cx('form-submit')} iconRight={<FaPaperPlane />}>
                        Liên hệ ngay
                    </Button>
                </form>

                <div className={cx('note')}>
                    <p>
                        Bạn muốn tìm hiểu thêm về tôi, chia sẻ với tôi về dự án của bạn hay chỉ đơn
                        giản là chào hỏi?
                    </p>
                    <p>
                        Hãy nhắn tin cho tôi và tôi sẽ trả lời bạn sớm nhất có thể. Thông tin của
                        bạn sẽ được bảo mật tuyệt đối.
                    </p>
                </div>
                {/* dùng để hển thị được toast */}
                <ToastContainer />
            </section>
        </>
    );
};

export default Contact;
