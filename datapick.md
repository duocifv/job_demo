


// Thêm nút "Lên lịch" và trường Flash Sale vào trang chỉnh sửa sản phẩm
function add_flash_sale_schedule_button() {
    global $post;

    // Thêm nút "Lên lịch"
    echo '<p><button type="button" class="button" id="toggle_flash_sale_schedule">Lên lịch Flash Sale</button></p>';

    // Thêm trường Flash Sale
    echo '<div id="flash_sale_schedule" style="display: none;">';

    // Trường ngày bắt đầu Flash Sale
    woocommerce_wp_text_input( array(
        'id'          => '_flash_sale_start_date',
        'label'       => 'Ngày bắt đầu Flash Sale',
        'placeholder' => 'Chọn ngày bắt đầu',
        'description' => 'Chọn ngày bắt đầu Flash Sale.',
        'type'        => 'text',
        'value'       => get_post_meta( $post->ID, '_flash_sale_start_date', true )
    ) );

    // Trường giờ bắt đầu Flash Sale
    woocommerce_wp_text_input( array(
        'id'          => '_flash_sale_start_time',
        'label'       => 'Giờ bắt đầu Flash Sale',
        'placeholder' => 'Chọn giờ bắt đầu',
        'description' => 'Chọn giờ bắt đầu Flash Sale.',
        'type'        => 'text',
        'value'       => get_post_meta( $post->ID, '_flash_sale_start_time', true )
    ) );

    // Trường ngày kết thúc Flash Sale
    woocommerce_wp_text_input( array(
        'id'          => '_flash_sale_end_date',
        'label'       => 'Ngày kết thúc Flash Sale',
        'placeholder' => 'Chọn ngày kết thúc',
        'description' => 'Chọn ngày kết thúc Flash Sale.',
        'type'        => 'text',
        'value'       => get_post_meta( $post->ID, '_flash_sale_end_date', true )
    ) );

    // Trường giờ kết thúc Flash Sale
    woocommerce_wp_text_input( array(
        'id'          => '_flash_sale_end_time',
        'label'       => 'Giờ kết thúc Flash Sale',
        'placeholder' => 'Chọn giờ kết thúc',
        'description' => 'Chọn giờ kết thúc Flash Sale.',
        'type'        => 'text',
        'value'       => get_post_meta( $post->ID, '_flash_sale_end_time', true )
    ) );

    echo '</div>';
}
add_action( 'woocommerce_product_options_pricing', 'add_flash_sale_schedule_button' );



function enqueue_flash_sale_script() {
    // Đảm bảo rằng jQuery được tải
    wp_enqueue_script('jquery');
    wp_enqueue_script('jquery-ui-datepicker');
    wp_enqueue_script('jquery-timepicker', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.13.1/jquery.timepicker.min.js', array('jquery'), null, true);

    // Tải CSS cho Datepicker và Timepicker
    wp_enqueue_style('jquery-ui-datepicker-css', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
    wp_enqueue_style('jquery-timepicker-css', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.13.1/jquery.timepicker.min.css');

    ?>
    <script type="text/javascript">
        jQuery(document).ready(function($){
            // Ẩn phần Flash Sale khi trang load
            $('#flash_sale_schedule').hide();

            // Khi người dùng click vào nút "Lên lịch"
            $('#toggle_flash_sale_schedule').click(function() {
                // Toggle hiển thị Flash Sale Schedule
                $('#flash_sale_schedule').toggle();
            });

            // Áp dụng Datepicker cho trường ngày
            $('#_flash_sale_start_date').datepicker({
                dateFormat: 'yy-mm-dd',  // Định dạng ngày
            });

            $('#_flash_sale_end_date').datepicker({
                dateFormat: 'yy-mm-dd',  // Định dạng ngày
            });

            // Áp dụng Timepicker cho trường giờ
            $('#_flash_sale_start_time').timepicker({
                timeFormat: 'HH:mm',  // Định dạng giờ: 24 giờ
                step: 15  // Bước giờ là 15 phút
            });

            $('#_flash_sale_end_time').timepicker({
                timeFormat: 'HH:mm',  // Định dạng giờ: 24 giờ
                step: 15  // Bước giờ là 15 phút
            });
        });
    </script>
    <?php
}
add_action('admin_footer', 'enqueue_flash_sale_script');


// Lưu thông tin ngày và giờ Flash Sale khi cập nhật sản phẩm
function save_flash_sale_schedule_fields( $post_id ) {
    // Kiểm tra và lưu ngày và giờ bắt đầu Flash Sale
    if ( isset( $_POST['_flash_sale_start_date'] ) ) {
        update_post_meta( $post_id, '_flash_sale_start_date', sanitize_text_field( $_POST['_flash_sale_start_date'] ) );
    }
    if ( isset( $_POST['_flash_sale_start_time'] ) ) {
        update_post_meta( $post_id, '_flash_sale_start_time', sanitize_text_field( $_POST['_flash_sale_start_time'] ) );
    }

    // Kiểm tra và lưu ngày và giờ kết thúc Flash Sale
    if ( isset( $_POST['_flash_sale_end_date'] ) ) {
        update_post_meta( $post_id, '_flash_sale_end_date', sanitize_text_field( $_POST['_flash_sale_end_date'] ) );
    }
    if ( isset( $_POST['_flash_sale_end_time'] ) ) {
        update_post_meta( $post_id, '_flash_sale_end_time', sanitize_text_field( $_POST['_flash_sale_end_time'] ) );
    }
}
add_action( 'woocommerce_process_product_meta', 'save_flash_sale_schedule_fields' );

